<?php
namespace AppBundle\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Validator\Constraints as Assert;
use Doctrine\ORM\Mapping as ORM;
use DateTime;

/**
 * @ApiResource(
 *  attributes={"filters"={"post.search"}},
 *  collectionOperations={
 *      "get"={"method"="GET"},
 *      "admin_get"={"method"="GET", "path"="/admin/posts"},
 *      "post"={"method"="POST", "path"="/admin/posts"}
 *  },
 *  itemOperations={
 *      "get"={"method"="GET"},
 *      "admin_get"={"method"="GET", "path"="/admin/posts/{id}"},
 *      "put"={"method"="PUT", "path"="/admin/posts/{id}"},
 *      "delete"={"method"="DELETE", "path"="/admin/posts/{id}"}
 *  }
 * )
 * @ORM\Entity
 */
class Post
{
    /**
     * @var int
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @var string
     * @ORM\Column
     * @Assert\NotBlank
     */
    private $title;

    /**
     * @var string
     * @ORM\Column
     */
    private $imageURL;

    /**
     * @var string
     * @ORM\Column(type="text")
     * @Assert\NotBlank
     */
    private $content;

    /**
     * @var boolean
     * @ORM\Column(type="boolean")
     */
    private $published = true;

    /**
     * @var DateTime
     * @ORM\Column(type="datetime")
     * @Assert\NotNull
     */
    private $publicationDate;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->publicationDate = new DateTime();
        $this->imageURL        = "";
    }

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * @param string $title
     *
     * @return $this
     */
    public function setTitle($title)
    {
        $this->title = $title;
        return $this;
    }

    /**
     * @return string
     */
    public function getImageURL()
    {
        return $this->imageURL;
    }

    /**
     * @param string $imageURL
     * @return $this
     */
    public function setImageURL($imageURL)
    {
        $this->imageURL = $imageURL;
        return $this;
    }

    /**
     * @return string
     */
    public function getContent()
    {
        return $this->content;
    }

    /**
     * @param string $content
     *
     * @return $this
     */
    public function setContent($content)
    {
        $this->content = $content;
        return $this;
    }

    /**
     * @return bool
     */
    public function isPublished()
    {
        return $this->published;
    }

    /**
     * @param bool $published
     * @return $this
     */
    public function setPublished($published)
    {
        $this->published = $published;
        return $this;
    }

    /**
     * @return DateTime
     */
    public function getPublicationDate()
    {
        return $this->publicationDate;
    }

    /**
     * @param DateTime $publicationDate
     *
     * @return $this
     */
    public function setPublicationDate(DateTime $publicationDate)
    {
        $this->publicationDate = $publicationDate;
        return $this;
    }
}
