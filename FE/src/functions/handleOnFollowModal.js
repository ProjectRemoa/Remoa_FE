export const handleOnFollowModal = (memberId, selectedPostId, setSelectedPostId) => {
  if (selectedPostId === memberId) {
    setSelectedPostId("");
  } else {
    setSelectedPostId(memberId);
  }
};