import os

def createIfNotExist(folder):
    if not os.path.exists(folder):
        os.makedirs(folder)

def move(folderName, files):
    for file in files:
        os.replace(file, f"{folderName}/{file}") 

if __name__ == "__main__":
        
    files = os.listdir()
    files.remove("main.py")

    createIfNotExist('Images')
    createIfNotExist('Docs')
    createIfNotExist('Media')
    createIfNotExist('Audio')
    createIfNotExist('Compressed-File')
    createIfNotExist('Disc')
    createIfNotExist('E-mail')
    createIfNotExist('Executable')
    createIfNotExist('Font-File')
    createIfNotExist('Internet')
    createIfNotExist('Programming')
    createIfNotExist('System')
    createIfNotExist('Database')
    createIfNotExist('Others')

    imgExts = [".png", ".jpg", ".jpeg",".svg",".gif",".tif",".tiff",".bmp",".eps",".ai",".ps",".psd"]
    images = [file for file in files if os.path.splitext(file)[1].lower() in imgExts ]

    docExts = [".txt", ".docx", "doc", ".pdf",".odt",".xls",".xlsx","xlsm",".ods",".ppt",".pptx",".rtf",".tex",".wpd",".odp",".key"]
    docs = [file for file in files if os.path.splitext(file)[1].lower() in docExts]


    mediaExts = [".mp4", ".flv",".3g2",".3gp",".avi",".flv",".h264",".m4v",".mkv",".mov",".mpg",".mpeg",".rm",".swf",".vob",".wmv"]
    medias = [file for file in files if os.path.splitext(file)[1].lower() in mediaExts]

    audioExts = [".aif",".cda",".mid",".midi",".mp3",".mpa",".ogg",".wav",".wma","wpl"]
    audio = [file for file in files if os.path.splitext(file)[1].lower() in audioExts ]

    compressedExts = [".7z",".arj",".deb",".pkg",".rar",".rpm",".tar.gz",".z",".zip"]
    compressed = [file for file in files if os.path.splitext(file)[1].lower() in compressedExts ]

    discExts = [".bin",".dmg",".iso",".toast",".vcd"]
    disc = [file for file in files if os.path.splitext(file)[1].lower() in discExts ]

    databaseExts = [".csv",".dat",".db",".dbf",".log",".mdb",".sav",".sql",".tar",".xml"]
    database = [file for file in files if os.path.splitext(file)[1].lower() in databaseExts ]

    emailExts = [".email",".eml",".emlx",".msg",".oft",".ost",".pst",".vcf"]
    email = [file for file in files if os.path.splitext(file)[1].lower() in emailExts ]

    executableExts = [".apk",".bat",".cgi",".pl",".com",".exe",".gadget",".jar",".msi",".wsf"]
    executable = [file for file in files if os.path.splitext(file)[1].lower() in executableExts ]

    fontFileExts = [".fnt",".fon",".otf",".ttf"]
    fontFile = [file for file in files if os.path.splitext(file)[1].lower() in fontFileExts ]

    internetExts = [".asp",".aspx",".cer",".cfm",".part",".rss",".jsp"]
    internet = [file for file in files if os.path.splitext(file)[1].lower() in internetExts ]

    programmingExts = [".c",".class",".cpp",".cs",".h",".java",".php",".sh",".swift",".vb",".py",".js"]
    programming = [file for file in files if os.path.splitext(file)[1].lower() in programmingExts ]

    systemExts = [".bak",".cab",".cfg",".cpl",".cur",".dll",".drv",".icns",".ico",".ini",".lnk",".msi",".sys",".tmp"]
    system = [file for file in files if os.path.splitext(file)[1].lower() in systemExts ]

    others = []
    for file in files:
        ext = os.path.splitext(file)[1].lower()
        if (ext not in mediaExts) and (ext not in docExts) and (ext not in imgExts) and (ext not in audioExts) and (ext not in compressedExts) and (ext not in discExts) and (ext not in databaseExts) and (ext not in emailExts) and (ext not in executableExts) and (ext not in fontFileExts) and (ext not in internetExts) and (ext not in programmingExts) and (ext not in systemExts) and os.path.isfile(file):
            others.append(file)

    move("Images", images)
    move("Docs", docs)
    move("Media", medias)
    move("Audio", audio)
    move("Compressed-File", compressed)
    move("Disc", disc)
    move("E-mail", email)
    move("Executable",executable)
    move("Font-File", fontFile)
    move("Internet", internet)
    move("Programming", programming)
    move("System", system)
    move("Database", database)
    move("Others", others)
