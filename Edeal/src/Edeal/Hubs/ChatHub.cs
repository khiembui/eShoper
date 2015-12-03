using Microsoft.AspNet.Cors.Core;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using System.Threading.Tasks;

namespace Edeal.Hubs
{
    [HubName("chatHub")]
    [EnableCors("AllowAll")]
    public class ChatHub : Hub
    {
        public async Task BroadcastMessage(string groupName, string callerName, string message)
        {
            // Case-insensitive when the server RPC the client's methods
            await Clients.All.appendNewMessage(callerName, message);
        }
    }
}
