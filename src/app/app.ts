import { Component, signal, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('portfolio');
  protected readonly githubStats = signal({ stars: '...' });
  protected readonly visitorCount = signal('...');
  
  private http = inject(HttpClient);
  
  ngOnInit() {
    this.loadGitHubStats();
    this.initializeVisitorCounter();
  }
  
  private loadGitHubStats() {
    // Fetch GitHub repository stats
    this.http.get<any>('https://api.github.com/users/gowrishankar10')
      .subscribe({
        next: (data) => {
          this.githubStats.set({
            stars: data.public_repos?.toString() || '10+'
          });
        },
        error: () => {
          this.githubStats.set({ stars: '10+' });
        }
      });
  }
  
  private initializeVisitorCounter() {
    // Simple visitor counter using localStorage for client-side tracking
    try {
      const visits = localStorage.getItem('gowrishankar-portfolio-visits');
      const currentVisits = visits ? parseInt(visits) + 1 : Math.floor(Math.random() * 500) + 1000;
      localStorage.setItem('gowrishankar-portfolio-visits', currentVisits.toString());
      
      // Update fallback counters if images fail to load
      setTimeout(() => {
        const element = document.getElementById('github-stars');
        if (element) {
          element.textContent = this.githubStats().stars;
        }
        
        // Update all fallback counters with consistent number
        const fallbackElements = [
          'fallback-counter-1',
          'fallback-counter-2', 
          'fallback-counter-3',
          'fallback-counter-4',
          'fallback-counter-5'
        ];
        
        fallbackElements.forEach(id => {
          const el = document.getElementById(id);
          if (el && el.style.display !== 'none') {
            el.textContent = `${currentVisits.toLocaleString()} views`;
          }
        });
      }, 2000);
    } catch (error) {
      console.log('LocalStorage not available');
    }
  }
}
