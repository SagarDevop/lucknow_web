import urllib.request
import os

images = {
    'hvac-cassette-ceiling.jpg': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop',
    'mep-electrical-panels.jpg': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop',
    'mep-pump-piping.jpg': 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop',
    'interior-modern-office.jpg': 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    'interior-luxury-retail.jpg': 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=800&auto=format&fit=crop',
    'amc-technician-gauges.jpg': 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop',
}

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

os.makedirs('public/images/services', exist_ok=True)

for name, url in images.items():
    out_path = f'public/images/services/{name}'
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as resp:
            data = resp.read()
            with open(out_path, 'wb') as f:
                f.write(data)
            print(f'Downloaded {name}: {len(data)} bytes')
    except Exception as e:
        print(f'Failed {name}: {e}')

