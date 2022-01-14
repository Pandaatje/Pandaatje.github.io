#!/bin/bash
clear
echo "Converting the following images:"
ls *.jpg

for i in $(ls *.jpg); do

    w=$(identify -format "%w" $i)
    h=$(identify -format "%h" $i)

    cp $i small/
    cp $i medium/

    if [[ $w > $h ]];then
        mogrify -resize 400 small/"$i"
        mogrify -resize 1000 medium/"$i"
        convert small/"$i" small_webp/"${i%%.*}".webp
        convert medium/"$i" medium_webp/"${i%%.*}".webp
    else
        mogrify -resize 400 small/"$i"
        mogrify -resize 600 medium/"$i"
        convert small/"$i" small_webp/"${i%%.*}".webp
        convert medium/"$i" medium_webp/"${i%%.*}".webp
    fi

done