#!/bin/bash

Dir=$*
for I in $Dir
    do
if [ -d $I ]
    then 
        echo "o caminho é um diretório!"
elif [ -f $I ]
 then 
    echo "o caminho é um arquivo comum!"
else
    echo "o caminho é um outro tipo de arquivo"
fi
ls -l $I
done