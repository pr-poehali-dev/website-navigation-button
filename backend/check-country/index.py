import json
import urllib.request
import os

def handler(event: dict, context) -> dict:
    """Проверяет страну пользователя по IP через ipstack."""
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

    headers = event.get('headers', {}) or {}
    ip = (
        headers.get('x-forwarded-for', '').split(',')[0].strip()
        or headers.get('x-real-ip', '')
        or event.get('requestContext', {}).get('identity', {}).get('sourceIp', '')
    )
    print(f"IP: {ip}")

    api_key = os.environ.get('IPSTACK_API_KEY', '')
    country = ''

    if ip:
        try:
            url = f'http://api.ipstack.com/{ip}?access_key={api_key}&fields=country_code'
            with urllib.request.urlopen(url, timeout=5) as resp:
                data = json.loads(resp.read().decode('utf-8'))
                country = data.get('country_code') or ''
                print(f"ipstack response: {data}")
        except Exception as e:
            print(f"ipstack error: {e}")

    print(f"Country: {country}")
    blocked = country == 'RU'

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'blocked': blocked, 'country': country})
    }
