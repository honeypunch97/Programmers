import sys

a=[]
for i in range(10):
    a.append(int(sys.stdin.readline())%42)
a=list(set(a))
print(len(a))