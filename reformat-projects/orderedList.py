'''
Before running, reformat any links in the old.txt file like so:
Make sure there are <10 instructions otherwise it'll turn out weird!!

Before: https://lostatnight.org
After: <a href='https://lostatnight.org/' target='_blank' style='color: #76A9C4;'>https://lostatnight.org/</a>

Here's the template for skills:
<ul><li>Human impact on Earth systems</li><li>Knowledge about pollution and its impact on natural life</li></ul>
'''
def main(): 
    file = open(
        "/Users/amnguyen/Documents/GitHub/Mission-Xplore-Science/reformat-projects/old.txt", "r+")  # old txt file with list of instructions
    file2 = open(
        "/Users/amnguyen/Documents/GitHub/Mission-Xplore-Science/reformat-projects/done.txt", "w+")  # formatted file with html tags

    formatInstructions(file, file2)

    file.close()
    file2.close()

def formatInstructions(file, file2):
    text = file.readlines()
    print(text)
    file2.write("<ol style='list-style-position: inside;'><li><input type='checkbox'>")

    # formats with html ordered list tags into a new file (done.txt)
    for i in range(len(text)-1):
        file2.write(text[i][0:-1]+"</li><li><input type='checkbox'>")
    file2.write(text[len(text)-1][0:-1]+"</li></ol>")

main()
