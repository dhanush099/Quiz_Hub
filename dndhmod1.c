#include <stdio.h>
int main()
{
    int c1, dragoninput1, dragondamage1=0, damagecount1=0;
    printf(""Select dragons\n 1. edna \n 2. hydra \n 3. medusa \n 4. echo \n 5. blizzard \n 6. odin "");
    scanf("%d", &dragoninput1);
    if(dragoninput1==1){
        dragondamage1=dragondamage1+10;
    }
    else if(dragoninput1==2){
        dragondamage1=dragondamage1+40;
    }
    else if(dragoninput1==3){
        dragondamage1=dragondamage1+70;
    }
    else if(dragoninput1==4){
        dragondamage1=dragondamage1+100;
    }
    else if(dragoninput1==5){
        dragondamage1=dragondamage1+600;
    }
    else if(dragoninput1==6){
        dragondamage1=dragondamage1+1200;
    }
    c1=0;
    damagecount1=dragondamage1+500;
    while(currency[5]>0 && c1<1){
        if(currency[5]==1 && viccounts[0]==0){
            printf("Fight Castor");
            if(damagecount1>=300){
                printf("You've won");
                viccounts[0]=vicounts[0]+1;
            }
            else{
                printf("You've lost");
            }
        }
        if(currency[5]==2 && viccounts[0]==1){
            printf("Fight Niobe");
            if(damagecount1>=500){
                printf("You've won");
                viccounts[0]=vicounts[0]+1;
            }
            else{
                printf("You've lost");
            }
        }
        if(currency[5]==3 && viccounts[0]==2){
            printf("Fight Kyros");
            if(damagecount1>=800){
                printf("You've won");
                viccounts[0]=vicounts[0]+1;
            }
            else{
                printf("You've lost");
            }
        }
        if(currency[5]==4 && viccounts[0]==3){
            printf("Fight Darius");
            if(damagecount1>=1000){
                printf("You've won");
                viccounts[0]=vicounts[0]+1;
            }
            else{
                printf("You've lost");
            }
        }
        c1=c1+1;
    }
    if(currency[5]==0){
        printf("You do not have enough amount of badges");
    }
    printf("Exit Story mode");
    if(viccounts[0]==4){
    printf("DM~ Congratulations, you've become the ruler!");
    }
    return 0;
}