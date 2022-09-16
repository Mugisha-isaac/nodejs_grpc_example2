const {startGrpcServer,getGrpcServer} = require('./index');
const protoLoader = require('@grpc/proto-loader');
const grpc = require('@grpc/grpc-js');
const PROTO_PATH = __dirname + "/protos/user.proto";


// const packageDefinition