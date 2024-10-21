'use client';

import Button from './Button';
// import SubmitButton from './SubmitButton';

export function DeleteButton() {
  function deleteHandler(event: React.MouseEvent<HTMLButtonElement>) {
    // if it's confirmed, delete the contact
    
    event.preventDefault();
    const response = confirm('Are you sure you want to delete this contact?');

    if (!response) return;
  }

  return (
    <Button onClick={deleteHandler} type="submit" theme="primary">
      Delete
    </Button>
  );
}
