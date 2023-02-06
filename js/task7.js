const fileSize = 820;
const flashDriveVolume = Number(prompt("Enter the volume of the flash drive"));
const numberOfFiles = Math.floor(flashDriveVolume/fileSize);
alert(`${flashDriveVolume} GB flash drive will fit ${numberOfFiles} files, ${fileSize} GB in size`)