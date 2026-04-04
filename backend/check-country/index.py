import json
import urllib.request

def handler(event: dict, context) -> dict:
    """Проверяет страну пользователя по IP. Принимает IP в query параметре."""
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

    params = event.get('queryStringParameters', {}) or {}
    ip = params.get('ip', '')
    print(f"IP from query: {ip}")

    country = ''

    try:
        with urllib.request.urlopen(f'http://ip-api.com/json/{ip}?fields=countryCode', timeout=5) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            country = data.get('countryCode', '')
    except Exception as e:
        print(f"ip-api.com error: {e}")

    if not country:
        try:
            with urllib.request.urlopen(f'https://ipapi.co/{ip}/country/', timeout=5) as resp:
                country = resp.read().decode('utf-8').strip()
        except Exception as e:
            print(f"ipapi.co error: {e}")

    print(f"Country: {country}")
    blocked = country == 'RU'

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'blocked': blocked, 'country': country})
    }
