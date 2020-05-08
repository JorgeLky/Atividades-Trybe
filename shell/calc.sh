#!/bin/bash

read -p "Digite um número > " num1
read -p "Digite o segundo número > " num2
read -p "Digite o operador (+ ou -)" op1

echo  $[$num1 $op1 $num2]


