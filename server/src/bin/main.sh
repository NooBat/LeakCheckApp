#!sh

cwd=$1

cd $cwd

echo "######################################################################"
echo "#####                   Starting processes...                    #####"

echo "#####                [1] Building source file...                 #####"

code=$(g++ -std=c++11 -g main.cpp ConcatStringTree.cpp -I . -o main)

if [[ $code -eq 1 ]]
then
  echo "#####               Failed to build source file...               #####"
else 
  echo "#####                     [2] Running...                         #####"
  ./main
fi
