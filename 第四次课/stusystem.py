# -*- coding: utf-8

# print("python")


def menu():
    print("==============学生管理系统=================")
    print("-----------------------------------------")
    print("\t\t  0、退出系统")
    print("\t\t  1、录入信息")
    print("\t\t  2、查询信息")
    print("\t\t  3、修改信息")
    print("\t\t  4、删除信息")
    print("\t\t  5、信息排序")
    print("\t\t  6、统计人数")
    print("\t\t  7、显示所有")


def main():
    while True:
        menu()
        input_ = input('请选择    ')
        if input_ != "":
            choice = int(input_)
            print(choice)
            if choice in [0, 1, 2, 3, 4, 5, 6, 7]:
                if choice == 0:
                    answer = input('您确认要退出系统嘛？Y/N')
                    print(answer)
                    if answer == 'Y' or answer == 'y':
                        print('感谢您的使用')
                        break
                    else:
                        continue
                if choice == 1:
                    pass
                if choice == 2:
                    pass
                if choice == 3:
                    pass
                if choice == 4:
                    pass
        else:
            break


def insert():
    pass


def search():
    pass


if __name__ == "__main__":
    main()
