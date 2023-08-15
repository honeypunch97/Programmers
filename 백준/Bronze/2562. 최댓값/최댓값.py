import sys
lst=[]
max=0
for i in range(9):
    lst.append(int(sys.stdin.readline()))
    if lst[i] > max:
        max = lst[i]
print(max)
print(lst.index(max)+1)