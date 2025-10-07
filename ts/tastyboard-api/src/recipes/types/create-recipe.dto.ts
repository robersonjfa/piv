import { IsArray, IsInt, IsNotEmpty, IsOptional, IsString, IsUrl, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateRecipeDto {
  @ApiProperty() @IsString() @IsNotEmpty() title!: string;
  @ApiProperty() @IsString() @IsNotEmpty() description!: string;
  @ApiPropertyOptional() @IsOptional() @IsUrl() imageUrl?: string;
  @ApiPropertyOptional() @IsOptional() @IsUrl() videoUrl?: string;
  @ApiProperty({ type: [String] }) @IsArray() ingredients!: string[];
  @ApiProperty({ type: [String] }) @IsArray() steps!: string[];
  @ApiPropertyOptional() @IsOptional() @IsInt() @Min(1) authorId?: number;
  @ApiPropertyOptional() @IsOptional() @IsInt() @Min(1) categoryId?: number;
}
