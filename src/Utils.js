/* eslint-disable prettier/prettier */
import {
  TOKEN_PROGRAM_ID,
  Token,
  ASSOCIATED_TOKEN_PROGRAM_ID,
} from '@solana/spl-token';
import { Transaction } from '@solana/web3.js';

export const getOrCreateAssociatedAccountInfo = async (
  mintPublicKey,
  ownerPublicKey,
  connection,
  sendTransaction,
  payerPublicKey
) => {
  const associatedAddress = await Token.getAssociatedTokenAddress(
    ASSOCIATED_TOKEN_PROGRAM_ID,
    TOKEN_PROGRAM_ID,
    mintPublicKey,
    ownerPublicKey
  );

  const accountInfo = await connection.getAccountInfo(associatedAddress);

  if (!accountInfo) {
    // Create token account
    const transaction = new Transaction().add(
      Token.createAssociatedTokenAccountInstruction(
        ASSOCIATED_TOKEN_PROGRAM_ID,
        TOKEN_PROGRAM_ID,
        mintPublicKey,
        associatedAddress,
        ownerPublicKey,
        payerPublicKey
      )
    );

    // Sign transaction, broadcast, and confirm
    const signature = await sendTransaction(transaction, connection);

    // console.log('SIGNATURE', signature);
    await connection.confirmTransaction(signature, 'processed');
  }

  return associatedAddress;
};
