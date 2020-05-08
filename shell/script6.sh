#!/bin/bash

A=$1
if [ -d $A ]
then 
    echo "O caminho $A tem $( ls $A | wc -l ) arquivos"
else
    echo "O argumento não é um diretório"
fi

    
