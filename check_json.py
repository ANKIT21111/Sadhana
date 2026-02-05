import json

def print_keys(pairs):
    keys = [p[0] for p in pairs]
    print(f"Keys at level: {keys}")
    d = {}
    for k, v in pairs:
        if k in d:
            print(f"!!! DUPLICATE: {k}")
        d[k] = v
    return d

with open('package.json', 'r') as f:
    json.loads(f.read(), object_pairs_hook=print_keys)
