from tkinter import *
from tkinter import font

root = Tk()
fonts = list(font.families())
fonts.sort()
tmp = []
for fnt in fonts:
    if not fnt in tmp:
        tmp.append(fnt)

with open('./js/fontFamilies.js', 'w', encoding="utf-8") as out:
    out.write("export const systemFonts = [\n'")
    out.write("',\n'".join(tmp))
    out.write("'\n]\n")
