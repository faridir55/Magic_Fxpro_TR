# SOP: Yeni Blog Yazısı Ekleme

Bu Standart Operasyon Prosedürü (SOP), Magic FX Pro web sitesinde yeni bir blog yazısı oluşturma, yazma ve yayınlama sürecini adım adım açıklamaktadır.

---

## 1. Dizin Yapısı ve Yönlendirme

Web sitesi Next.js App Router ile oluşturulmuştur ve blog makaleleri için MDX kullanmaktadır.

Her blog yazısı, [blog](file:///c:/Users/MASHADSERVICE/Documents/Antigravity/Magic_Fxpro_TR/app/blog) dizini altında kendi alt klasöründe bulunur:
```
app/blog/
├── [yazi-slug]/
│   └── page.mdx
```

Klasör adı (`yazi-slug`), blog yazısının URL yolunu belirler (ör. `/blog/yazi-slug`).
- Slug için küçük harf alfanümerik karakterler ve tire kullanın (ör. `islem-stratejisi-guncelleme`).
- Boşluk veya özel karakter kullanmaktan kaçının.

---

## 2. Frontmatter Ayarlama

Blog listeleme sistemi, [app/blog](file:///c:/Users/MASHADSERVICE/Documents/Antigravity/Magic_Fxpro_TR/app/blog) klasörlerini dinamik olarak tarar ve `page.mdx` dosyasının üstündeki metadata'yı çıkarır.

Her `page.mdx` dosyası, üçlü tireler (`---`) arasına alınmış bir YAML frontmatter bloğu ile başlamalıdır:

```yaml
---
title: "İlgi Çekici Blog Başlığınız"
date: "20 Mayıs 2026"
excerpt: "Makalenin neyi kapsadığını anlatan, okuyucunun dikkatini çekmek için 1-2 cümlelik kısa bir özet."
category: "Algoritmik Strateji"
readingTime: "5 dk okuma"
---
```

### Frontmatter Alanları Referansı
| Alan | Tür | Açıklama |
| :--- | :--- | :--- |
| `title` | `string` | Yazının ana başlığı. Kaçış karakteri kullanılmadıkça veya farklı dış tırnak işaretleriyle sarılmadıkça, başlık içinde tırnak işareti kullanmaktan kaçının. |
| `date` | `string` | Yayın tarihi (ör. `"20 Mayıs 2026"`). Yazılar, dizin sayfasında bu tarihe göre sıralanır (en yeniler önce). |
| `excerpt` | `string` | Blog listesinde ve öne çıkan yazı kartlarında görüntülenen kısa bir özet. |
| `category` | `string` | Konu kategorisi. Bu projede standart kategoriler: `Algoritmik Strateji`, `Risk Yönetimi`, `Aracı Kurum Altyapısı`, `Piyasa İstihbaratı`. |
| `readingTime` | `string` | Tahmini okuma süresi (ör. `"5 dk okuma"` veya `"4 dk okuma"`). |

---

## 3. MDX Dosya Yapısının Oluşturulması

YAML frontmatter bloğunun altında, gerekli düzen bileşenlerini ve biçimlendirmeyi eklemeniz gerekmektedir. İşte yeni bir `page.mdx` dosyasının tam iskeleti:

```markdown
---
title: "Volatiliteyi Yönetmek: Altın İşlemlerinde İleri Risk Sistemleri"
date: "20 Mayıs 2026"
excerpt: "Otomatik sermaye koruma kontrollerinin, yüksek etkili ekonomik haberlerde kopya işlem portföylerini nasıl stabilize ettiğine dair kapsamlı bir inceleme."
category: "Risk Yönetimi"
readingTime: "5 dk okuma"
---

<ArticleHeader frontmatter={frontmatter} />

Giriş paragrafınız buraya gelir. Makalenin temel tezini vurgulayarak ilgi çekici tutun.

## İlk Ana Başlık

Gövde metninizi buraya yazın. Standart markdown kullanabilirsiniz:
- **Kalın metin** vurgu için.
- *İtalik* nüans için.
- Madde işaretleri için sırasız listeler.
- Sıralı adımlar için sıralı listeler.
```

> [!IMPORTANT]
> `<ArticleHeader frontmatter={frontmatter} />` bileşeni, frontmatter'ınızın kapanış `---` işaretinden hemen sonra yerleştirilmelidir. Bu bileşen, sitenin premium tipografik stilinde kategori, tarih, okuma süresi, başlık ve özeti otomatik olarak oluşturur.

---

## 4. Özel Tasarım Bileşenlerini Kullanma

Premium, son teknoloji bir görünüm sağlamak için projede, doğrudan markdown içinde kullanabileceğiniz yerleşik özel etkileşimli düzen blokları bulunmaktadır.

### A. Anahtar Çıkarım (`<KeyTakeaway>`)
Merkezi kavramları, güçlü özetleri veya öne çıkan alıntıları vurgulamak için kullanın.

**Sözdizimi:**
```markdown
<KeyTakeaway>
Otomasyon tutarlılık sağlar, ancak XAU/USD piyasalarında hayatta kalmayı nihayetinde belirleyen matematiksel risk kontrolüdür.
</KeyTakeaway>
```

### B. Bilgi Kutusu (`<InsightBox>`)
Detaylı açıklamalar, mikro analizler, teknik tanımlar veya yan notlar için kullanın. Altın kenarlıklı başlık header'ı ile şık, cam görünümlü bir panel oluşturur.

**Sözdizimi:**
```markdown
<InsightBox title="Mikrosaniye İşlem Dinamikleri">
Altın işlemlerinde, makroekonomik veri açıklamaları piyasayı saniyeler içinde yüzlerce pip hareket ettirebilir. Algoritmik sistemler bu verileri milisaniyeler içinde işleyerek, manuel işlemcilerin zorlandığı işlem gecikmesinden kaçınır.
</InsightBox>
```

### C. Risk Notu (`<RiskNote>`)
Altın işlemleri doğası gereği risk taşır. Her yazıda, kaldıraç, piyasa volatilitesi veya kopya işlem riskine ilişkin uygun olduğunda resmi bir risk notu bulunmalıdır.

**Sözdizimi:**
```markdown
<RiskNote>
Algoritmik sistemler sıkı sermaye koruma devreleri kullansa da, olumsuz piyasa koşulları veya ani siyah kuğu olayları portföy bakiyelerini olumsuz etkileyebilir. Kaldıraçlı enstrümanlar önemli sermaye riski içerir.
</RiskNote>
```

---

## 5. Video Entegrasyonları Ekleme (İsteğe Bağlı)

Blog yazınız harici medyadan bahsediyorsa (ör. bir GTC FX tanıtım videosu), projenin glassmorphism stilini koruyan duyarlı, modern bir konteynır içinde temiz bir şekilde gömebilirsiniz.

**Sözdizimi:**
```html
<div className="not-prose my-10 w-full aspect-video rounded-xl overflow-hidden border border-glass-border">
    <iframe 
        className="w-full h-full" 
        src="https://www.youtube.com/embed/VIDEO_ID" 
        title="Video Açıklaması" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen
    ></iframe>
</div>
```

---

## 6. Doğrulama & Yayınlama Kontrol Listesi

Değişikliklerinizi yayınlamadan önce, entegrasyonu yerel olarak doğrulayın:

1. **Dosya Konumunu Doğrulayın**: Dosyanın `page.mdx` olarak adlandırıldığından ve `app/blog/` altındaki doğru alt klasörde olduğundan emin olun.
2. **Yerel Çalıştırma**: Çalışma alanınızda geliştirme sunucusunu başlatın:
   ```bash
   npm run dev
   ```
3. **Dizin Sayfasını Kontrol Edin**: Doğrulamak için `http://localhost:3000/blog` adresini ziyaret edin:
   - Yazınız listelenmiş olmalı.
   - Doğru şekilde sıralanmış olmalı (en yeniyse, otomatik olarak büyük "Öne Çıkan Yazı" olarak görüntülenmelidir).
   - Başlık, özet, tarih, okuma süresi ve kategori doğru şekilde görünmelidir.
4. **Makale Sayfasını Kontrol Edin**: Yazıya tıklayın ve doğrulayın:
   - URL `/blog/yazi-slug` şeklindedir.
   - `<ArticleHeader>` mükemmel şekilde oluşturulur.
   - Tüm markdown başlıkları, listeler, `<InsightBox>`, `<KeyTakeaway>` ve `<RiskNote>` öğeleri doğru duyarlı stille oluşturulur.
