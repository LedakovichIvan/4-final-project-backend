import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class FileSizeValidationPipe implements PipeTransform {
	transform(value: any, metadata: ArgumentMetadata) {
		// "value" is an object containing the file's attributes and metadata
		const maxSizeKb = 100000;
		return value.size < maxSizeKb;
	}
}
