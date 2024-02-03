# main.tf

provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "example_instance" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
  key_name      = "your_key_pair_name"
  subnet_id     = "your_subnet_id"
}
