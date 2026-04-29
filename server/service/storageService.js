import fs from 'fs';
import path from 'path';

export const saveFile = async (file) => {
  try {
    const uploadPath = path.join(process.cwd(), 'uploads');

    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath);
    }

    const filePath = path.join(uploadPath, file.name);

    fs.writeFileSync(filePath, file.data);

    return {
      success: true,
      path: filePath,
    };
  } catch (err) {
    return {
      success: false,
      error: err.message,
    };
  }
};
