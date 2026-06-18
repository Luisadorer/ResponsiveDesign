/* ── HERO TAGS ── */
.prod-hero-tags {
  display: flex;
  gap: 8px;
  margin-top: 16px;
}

.tag {
  padding: 4px 12px;
  background: rgba(255,255,255,0.15);
  border: 1px solid rgba(255,255,255,0.3);
  color: white;
  font-size: 10px;
  letter-spacing: 1px;
  font-weight: 300;
  border-radius: 20px;
}

/* ── MODELLVARIANTEN ── */
.prod-variants {
  padding: 80px;
  background: white;
}

.variants-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 48px;
}

.variants-header h2 {
  font-size: 32px;
  font-weight: 200;
  color: #111;
  letter-spacing: 0.5px;
}

.variants-compare {
  font-size: 12px;
  color: #555;
  text-decoration: none;
  letter-spacing: 1px;
  font-weight: 300;
}

.variants-compare:hover {
  color: #111;
}

.variants-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.variant-card {
  border: 1px solid #e0e0e0;
  overflow: hidden;
  transition: border-color 0.2s;
}

.variant-card.active {
  border-color: #111;
}

.variant-card:hover {
  border-color: #111;
}

.variant-img {
  height: 240px;
  background-size: cover;
  background-position: center;
}

.variant-info {
  padding: 28px;
}

.variant-info h3 {
  font-size: 22px;
  font-weight: 200;
  color: #111;
  margin-bottom: 6px;
}

.variant-price {
  font-size: 13px;
  color: #111;
  font-weight: 300;
  margin-bottom: 2px;
}

.variant-monthly {
  font-size: 11px;
  color: #888;
  font-weight: 300;
  margin-bottom: 14px;
}

.variant-tags {
  display: flex;
  gap: 6px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.variant-tags .tag {
  background: #f0f0f0;
  border: none;
  color: #444;
  border-radius: 20px;
  padding: 4px 12px;
  font-size: 10px;
}

.variant-specs {
  border-top: 1px solid #eee;
  margin-bottom: 24px;
}

.vs-row {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
}

.vs-val {
  font-size: 18px;
  font-weight: 200;
  color: #111;
}

.vs-lbl {
  font-size: 11px;
  color: #888;
  font-weight: 300;
  letter-spacing: 0.5px;
  align-self: center;
}

.variant-actions {
  display: flex;
  gap: 12px;
}