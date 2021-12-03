from tkinter import *
from tkinter import font

root = Tk()
fonts = list(font.families())
fonts.sort()
with open('./js/fontFamilies.js', 'w', encoding="utf-8") as out:
    out.write("export const systemFonts = [\n'")
    out.write("',\n'".join(fonts))
    out.write("'\n]\n")
