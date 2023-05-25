from tkinter import Tk, font

root = Tk()
fonts = list(font.families())
fonts.sort()
tmp = []
for fnt in fonts:
    if not fnt in tmp:
        tmp.append(fnt)

with open('./js/fontFamilies.js', 'w', encoding="utf-8") as out:
    out.write("var loaded_sys_fonts_ = [\n'")
    out.write("',\n'".join(tmp))
    out.write("'\n]\n")
