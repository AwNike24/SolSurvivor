function parseUserDoc (userDoc, token) {
  return {
    auth: token,
    depositAddress: userDoc.depositAddress,
    isAdmin: userDoc.isAdmin,
    id: userDoc._id,
    survivorBalance: userDoc.survivorBalance,
    type: userDoc.type,
    username: userDoc.username
  }
}

export {
  parseUserDoc
}
