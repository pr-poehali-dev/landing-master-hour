import json
import urllib.request

def handler(event: dict, context) -> dict:
    """Прокси для получения погоды в районе Отрадное через open-meteo.com"""
    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type'}, 'body': ''}

    url = (
        "https://api.open-meteo.com/v1/forecast"
        "?latitude=55.8649&longitude=37.6802"
        "&daily=temperature_2m_max,temperature_2m_min,weathercode"
        "&timezone=Europe%2FMoscow&forecast_days=3"
    )

    with urllib.request.urlopen(url, timeout=10) as resp:
        data = json.loads(resp.read().decode())

    days = []
    for i, date in enumerate(data['daily']['time']):
        days.append({
            'date': date,
            'tempMax': round(data['daily']['temperature_2m_max'][i]),
            'tempMin': round(data['daily']['temperature_2m_min'][i]),
            'code': data['daily']['weathercode'][i],
        })

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
        'body': json.dumps({'days': days}),
    }
