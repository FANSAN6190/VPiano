###################################################################
################### RUN With Caution ##############################
###################################################################
#This script can change the names of your audio files

import os 
def rename_img():    
    cur_dir="assets/audio/keys"
    files=os.listdir(cur_dir)
    count=len(files)
    i=0
    for note_ogg in files:
        path=cur_dir+"/"+note_ogg    
        new_path=cur_dir+"/"+"Key_"+note_ogg[-6:]
        os.rename(path,new_path)
        print(path,"-->",new_path)
        print(f"{((i+1)*100//count)}% Completed")
        i+=1

    #print(files)
    print("Script Execution Completed")


if __name__=='__main__':
    try:
        confirm=input("Confirm (Y/N) Before proceeding, This script can change the names of your files :: ")
        if(confirm=='Y'):
            print("Executing Script")
            rename_img()
            print("Thank You")
        else:
            print("Canceling Exection")
    except:
        print("Encountered Some Unknown Error")