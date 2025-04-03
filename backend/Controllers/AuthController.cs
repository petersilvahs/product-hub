using Microsoft.AspNetCore.Mvc;
using product_hub.Services;

namespace product_hub.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AuthService _authService;

        public AuthController(AuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest request)
        {
            if (request.Email == "admin@admin.com" && request.Password == "admin")
            {
                var token = _authService.GenerateJwtToken("1", "Admin");
                return Ok(new { token });
            }
            return Unauthorized();
        }
    }

public class LoginRequest
{
    public required string Email { get; set; }
    public required string Password { get; set; }
}

}
