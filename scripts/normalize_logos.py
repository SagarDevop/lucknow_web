import os
import xml.etree.ElementTree as ET

for f in sorted(os.listdir('public/images/logos')):
    if not f.endswith('.svg'):
        continue
    p = os.path.join('public/images/logos', f)
    with open(p, 'r', encoding='utf-8', errors='ignore') as fp:
        content = fp.read()
    
    # Check if viewBox exists
    if 'viewBox' not in content and 'viewbox' not in content:
        try:
            tree = ET.fromstring(content)
            w = tree.attrib.get('width', '').replace('px', '').replace('mm', '').strip()
            h = tree.attrib.get('height', '').replace('px', '').replace('mm', '').strip()
            if w and h:
                print(f'Adding viewBox to {f}: 0 0 {w} {h}')
                # inject viewBox into root svg tag
                idx = content.find('<svg')
                if idx != -1:
                    new_content = content[:idx+4] + f' viewBox="0 0 {w} {h}" ' + content[idx+4:]
                    with open(p, 'w', encoding='utf-8') as out_fp:
                        out_fp.write(new_content)
        except Exception as e:
            print(f"Error parsing {f}: {e}")

print("Normalized SVGs.")

