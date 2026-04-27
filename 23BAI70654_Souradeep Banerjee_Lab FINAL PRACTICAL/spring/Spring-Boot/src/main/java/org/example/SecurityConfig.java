package org.example;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

/**
 * Security configuration that enables Google OAuth2 login.
 *
 * Flow:
 *  1. Any unauthenticated request is redirected to Google's consent screen.
 *  2. After Google redirects back, Spring Security exchanges the code for tokens,
 *     loads the user's profile into an OAuth2User, and creates a session.
 *  3. The authenticated user is then redirected to /profile.
 */
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            // ── Authorization rules ──────────────────────────────────────────
            .authorizeHttpRequests(auth -> auth
                // /profile requires the user to be authenticated
                .requestMatchers("/profile").authenticated()
                // everything else (login page, error page, static assets) is open
                .anyRequest().permitAll()
            )

            // ── OAuth2 Login ─────────────────────────────────────────────────
            .oauth2Login(oauth2 -> oauth2
                // After a successful login, send the user to /profile
                .defaultSuccessUrl("/profile", true)
            )

            // ── Logout ───────────────────────────────────────────────────────
            .logout(logout -> logout
                .logoutSuccessUrl("/")
                .invalidateHttpSession(true)
                .deleteCookies("JSESSIONID")
            );

        return http.build();
    }
}
