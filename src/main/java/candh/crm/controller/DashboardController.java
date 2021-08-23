package candh.crm.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DashboardController
{
    @GetMapping("/api/dashboard")
    public ResponseEntity<?> dashboard() {
        return ResponseEntity.ok("This is the dashboard.");
    }
}
