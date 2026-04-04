import json
import urllib.request

def handler(event: dict, context) -> dict:
    """Проверяет страну пользователя по IP. Возвращает blocked=True если Россия."""
    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    ip = event.get('requestContext', {}).get('identity', {}).get('sourceIp', '')

    country = ''
    try:
        with urllib.request.urlopen(f'https://ipapi.co/{ip}/country/', timeout=5) as resp:
            country = resp.read().decode('utf-8').strip()
    except:
        country = ''

    blocked = country == 'RU'

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'blocked': blocked, 'country': country})
    }
