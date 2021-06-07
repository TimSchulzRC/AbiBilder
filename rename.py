import os

path = input("Path: ")
files = os.listdir(path)
numb = 1

for file in files:
    name = file.split(".")
    fileType = name[len(name)-1]
    os.rename(path + "/" + file, path + "/" + str(numb) + "." + fileType)
    numb += 1
