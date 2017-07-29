<?php
namespace AppBundle\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Validator\Constraints as Assert;
use Doctrine\ORM\Mapping as ORM;
use DateTime;

/**
 * @ApiResource(
 *  attributes={"filters"={"content.name"}},
 *  collectionOperations={
 *      "get"={"method"="GET"},
 *      "post"={"method"="POST", "path"="/admin/content"}
 *  },
 *  itemOperations={
 *      "get"={"method"="GET"},
 *      "put"={"method"="PUT", "path"="/admin/content/{id}"},
 *      "delete"={"method"="DELETE", "path"="/admin/content/{id}"}
 *  }
 * )
 * @ORM\Entity
 */
class Content
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
    private $name;

    /**
     * @var string
     * @ORM\Column
     * @Assert\NotBlank
     */
    private $title;

    /**
     * @var string
     * @ORM\Column
     * @Assert\NotBlank
     */
    private $permalink;

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
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param string $name
     *
     * @return $this
     */
    public function setName($name)
    {
        $this->name = $name;
        return $this;
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
    public function getPermalink()
    {
        return $this->name;
    }

    /**
     * @param string $permalink
     *
     * @return $this
     */
    public function setPermalink($permalink)
    {
        $this->permalink = $permalink;
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
