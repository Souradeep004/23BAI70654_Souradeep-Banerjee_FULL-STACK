package org.example;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

/**
 * REST controller that exposes a /profile endpoint.
 *
 * After a successful Google OAuth2 login, Spring Security stores the
 * authenticated user as an {@link OAuth2User}.  Google populates the
 * standard OpenID attributes including "name" and "email".
 *
 * Example response:
 * <pre>
 * {
 *   "name":  "Jane Doe",
 *   "email": "jane.doe@gmail.com"
 * }
 * </pre>
 */
@RestController
public class ProfileController {

    /**
     * Returns the authenticated user's name and email as JSON.
     *
     * @param principal the currently authenticated OAuth2 user,
     *                  injected automatically by Spring Security.
     * @return 200 OK with a JSON body, or 401 if somehow unauthenticated
     *         (the security filter chain should prevent the latter).
     */
    @GetMapping("/profile")
    public ResponseEntity<Map<String, String>> profile(
            @AuthenticationPrincipal OAuth2User principal) {

        if (principal == null) {
            // Shouldn't happen given our SecurityConfig, but guard defensively.
            return ResponseEntity.status(401).build();
        }

        // Google's OAuth2 user-info endpoint returns these standard fields.
        String name  = principal.getAttribute("name");
        String email = principal.getAttribute("email");

        Map<String, String> response = Map.of(
                "name",  name  != null ? name  : "N/A",
                "email", email != null ? email : "N/A"
        );

        return ResponseEntity.ok(response);
    }
}
