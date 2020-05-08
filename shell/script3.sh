#!/bin/bash
cam=/home/lyraah/Trybe/sh/script2.sh

if [ -e $cam ]
then 
    echo "O caminho está habilidado"
else 
    echo "O caminho não está habilitado"
fi

if [ -w $cam ]
    then
        echo "você tem permissão para editar"
else 
    echo " você não foi altorizado a editar "
fi
