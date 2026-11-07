import os
import re

for f in sorted(os.listdir('public/images/logos')):
    if not f.endswith('.svg'):
        continue
    p = os.path.join('public/images/logos', f)
    with open(p, 'r', encoding='utf-8', errors='ignore') as fp:
        content = fp.read()
    
    m = re.search(r'<svg([^>]+)>', content, re.IGNORECASE)
    if m:
        orig_tag = m.group(0)
        new_tag = orig_tag
        
        # Remove mm from width and height
        new_tag = re.sub(r'width=["\']([^"\']+)mm["\']', r'width="\1"', new_tag)
        new_tag = re.sub(r'height=["\']([^"\']+)mm["\']', r'height="\1"', new_tag)
        
        # Ensure proper viewBox format (replace commas with spaces if any)
        vb = re.search(r'viewBox=["\']([^"\']+)["\']', new_tag)
        if vb:
            cleaned_vb = vb.group(1).replace(',', ' ')
            # Collapse multiple spaces
            cleaned_vb = ' '.join(cleaned_vb.split())
            new_tag = re.sub(r'viewBox=["\'][^"\']+["\']', f'viewBox="{cleaned_vb}"', new_tag)
            
        if new_tag != orig_tag:
            print(f"Updated {f}")
            content = content.replace(orig_tag, new_tag, 1)
            with open(p, 'w', encoding='utf-8') as out_fp:
                out_fp.write(content)

print("Finished cleaning SVGs.")

