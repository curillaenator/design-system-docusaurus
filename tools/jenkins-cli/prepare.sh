#!/bin/sh

DEST="$HOME/.config/edu/certs"

mkdir -p $DEST

echo $DEST/ca.pem

openssl pkcs12 -in $1 -out $DEST/ca.pem -cacerts -nokeys
openssl pkcs12 -in $1 -out $DEST/client.pem -clcerts -nokeys
openssl pkcs12 -in $1 -out $DEST/key.pem -nocerts
