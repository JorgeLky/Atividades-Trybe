#!/bin/bash

data=$(date +%F)
dir=$1
ext=$2

cd $dir

for file in `ls *.$2`
    do
        mv $file ${data}-${file}
        echo "Renomeando $file para ${data}-${file}"
    done
