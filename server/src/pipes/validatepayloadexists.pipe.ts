import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Injectable()
export class ValidatePayloadExistsPipe implements PipeTransform {
  transform(payload: any, metadata: ArgumentMetadata) {
    const IsExistField = Object.keys(payload).length;
    if (!IsExistField) {
      throw new HttpException(
        { message: 'Payload should not be empty' },
        HttpStatus.BAD_REQUEST,
      );
    }
    return payload;
  }
}
