import os
import json
import psycopg2

def handler(event: dict, context) -> dict:
    """Счётчик посетителей: записывает визит и возвращает статистику за день, месяц и год."""
    cors = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    }

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': cors, 'body': ''}

    conn = psycopg2.connect(os.environ['DATABASE_URL'], sslmode='disable')
    cur = conn.cursor()
    method = event.get('httpMethod', 'GET')

    if method == 'POST':
        cur.execute("INSERT INTO visitors (visited_at) VALUES (NOW())")
        conn.commit()

    cur.execute("""
        SELECT
            COUNT(*) FILTER (WHERE visited_at >= DATE_TRUNC('day', NOW() AT TIME ZONE 'Europe/Moscow') AT TIME ZONE 'Europe/Moscow'),
            COUNT(*) FILTER (WHERE visited_at >= DATE_TRUNC('month', NOW() AT TIME ZONE 'Europe/Moscow') AT TIME ZONE 'Europe/Moscow'),
            COUNT(*) FILTER (WHERE visited_at >= DATE_TRUNC('year', NOW() AT TIME ZONE 'Europe/Moscow') AT TIME ZONE 'Europe/Moscow')
        FROM visitors
    """)
    row = cur.fetchone()
    cur.close()
    conn.close()

    return {
        'statusCode': 200,
        'headers': {**cors, 'Content-Type': 'application/json'},
        'body': json.dumps({'today': int(row[0]), 'month': int(row[1]), 'year': int(row[2])})
    }