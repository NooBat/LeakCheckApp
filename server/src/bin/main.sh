#!sh

cwd=$1

cd $cwd

echo "######################################################################"
echo "#####                  Starting processes...                     #####"
echo "######################################################################"

echo "[1] Building source file..."
g++ -g main.cpp ConcatStringTree.cpp -I . -o main

echo "[2] Running..."
./main