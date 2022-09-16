const {startGrpcServer,getGrpcServer} = require('./index');
const protoLoader = require('@grpc/proto-loader');
const grpc = require('@grpc/grpc-js');
const PROTO_PATH = __dirname + "/protos/user.proto";


const packageDefinition = protoLoader.loadSync(PROTO_PATH,{
    keepCase: true,
    longs:String,
    defaults:true,
    oneofs:true
});


const user_proto = grpc.loadPackageDefinition(packageDefinition);

startGrpcServer();

const server = getGrpcServer();
