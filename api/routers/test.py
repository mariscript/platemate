def fix_misspellings(corrections):
    output = []
    for d in corrections:
        word = ''
        for i, letter in enumerate(d["word"]):
            if i != d["position"] - 1:
                word += letter
        output.append(word)
    return output


fix_misspellings([ { "word": "tablett", "position": 7 },
  { "word": "marrble", "position": 4 },
  { "word": "xdocker", "position": 1 },
])
