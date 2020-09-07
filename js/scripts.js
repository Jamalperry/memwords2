	const input2 = document.querySelector('#image_uploads2');
  input2.addEventListener('change', updateImageDisplay2);

  const preview2 = document.querySelector('.preview2');


function updateImageDisplay2() {
  while(preview2.firstChild) {
    preview2.removeChild(preview2.firstChild);
  }

  const curFiles2 = input2.files;
  if(curFiles2.length === 0) {
    const para2 = document.createElement('p');
    para2.textContent = 'No files currently selected for upload';
    preview2.appendChild(para2);
  } else {
    const list2 = document.createElement('ol');
    preview2.appendChild(list2);

    for(const file2 of curFiles2) {
      const listItem2 = document.createElement('li');
      const para2 = document.createElement('p');

      if(validFileType(file2)) {
        para2.textContent = `${file2.name}`;
        const image2 = document.createElement('img');
        image2.src = URL.createObjectURL(file2);

        listItem2.appendChild(image2);
        listItem2.appendChild(para2);
      } else {
        para2.textContent = `File name ${file2.name}: Not a valid file type. Update your selection.`;
        listItem2.appendChild(para2);
      }

      list2.appendChild(listItem2);
    }
  }
}

// https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types
	 const fileTypes2 = [
			 'image/apng',
			 'image/bmp',
			 'image/gif',
			 'image/jpeg',
			 'image/pjpeg',
			 'image/png',
			 'image/svg+xml',
			 'image/tiff',
			 'image/webp',
			 `image/x-icon`
	 ];

	 function validFileType2(file2) {
		 return fileTypes2.includes(file2.type);
	 }

	 function returnFileSize2(number) {
		 if(number < 1024) {
			 return number + 'bytes';
		 } else if(number > 1024 && number < 1048576) {
			 return (number/1024).toFixed(1) + 'KB';
		 } else if(number > 1048576) {
			 return (number/1048576).toFixed(1) + 'MB';
		 }
	 }
