#include<stdio.h>
#include<stdlib.h>
char stk[25];
int tos=-1;
void push(char opr)
{
stk[++tos]=opr;
}
int pop()
{
return(stk[tos--]);
}
int preced(char opr)
{
if(opr=='^'||opr=='%')
return(4);
if(opr=='*'||opr=='/')
return(3);
if(opr=='+'||opr=='-')
return(2);
if(opr=='('||opr=='#')
return(1);
}
int main()
{
char infix[20],postfix[20];
int i,j=0;
printf("Enter the infix expression:\n");
scanf("%s",infix);
push('#');
printf("The infix expression is:%s\n",infix);
printf("The postfix expression is:%s\n",postfix);
return 0;
}


